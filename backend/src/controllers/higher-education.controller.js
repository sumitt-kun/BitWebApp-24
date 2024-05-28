import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { HigherEducation } from "../models/higher-education.model.js";
import { uploadOnCloudinary, deleteFromCloudinary } from "../utils/Cloudinary.js";

const createHigherEducation = asyncHandler(async (req, res) => {
  const { institution, degree, fieldOfStudy, startDate, endDate } = req.body;
  if (!req.files || !req.files.length) {
    throw new ApiError(400, "File upload required");
  }

  const docsURL = [];
  
  for (const file of req.files) {
    try {
      const cloudinaryResponse = await uploadOnCloudinary(file.path);
      console.log("Uploaded file to Cloudinary:", cloudinaryResponse);
      docsURL.push(cloudinaryResponse.secure_url);
    } catch (error) {
      console.error("Error uploading file to Cloudinary:", error);
      throw new Error("Failed to upload file to Cloudinary");
    }
  }

  const higherEducation = await HigherEducation.create({
    name: req.user._id,
    institution,
    degree,
    fieldOfStudy,
    startDate,
    endDate,
    docs: docsURL,
  });

  res.status(201).json({ 
    success: true, 
    data: higherEducation 
  });
});

const getHigherEducations = asyncHandler(async (req, res) => {
  const higherEducations = await HigherEducation.find({name: req.user._id}).populate('name', 'rollNumber fullName');

  res.status(200).json({ 
    success: true, 
    data: higherEducations 
  });
});

const deleteHigherEducation = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const deletedHigherEducation = await HigherEducation.findByIdAndDelete(id);  

    if(!deletedHigherEducation){
      throw new ApiError(404, "Higher Education not found")
    }

    const docsURL = deletedHigherEducation.docs;
    if (docsURL && Array.isArray(docsURL) && docsURL.length > 0) {
      for (const url of docsURL) {
        try {
          const publicId = url.split("/").pop().split(".")[0];
          await deleteFromCloudinary(publicId);
        } catch (error) {
          console.error("Error deleting file from Cloudinary:", error);
        }
      }
    }

    res.status(200).json({
      success: true,
      data: {},
    });

  } catch (error) {
    console.error("Error deleting Higher-education", error);
    res.status(500).json({ error : "Internal Server Error" })
  }

});

const getHigherEducationById = asyncHandler(async (req, res)=>{
  const higherEducation = await HigherEducation.findById(req.params.id);

  if(!higherEducation){
    throw new ApiError(404, "Higher Education not found");
  }

  res.status(200).json({
    success: true,
    data: higherEducation
  })
});

const getAllHigherEducations = asyncHandler(async (req, res)=>{
  const higherEducations = await HigherEducation.find().populate('name', 'rollNumber fullName');

  res.status(200).json({
    success: true,
    data: higherEducations
  });
});


const updateHigherEducation = asyncHandler(async (req, res)=>{
  const { id } = req.params;
  const { institution, degree, fieldOfStudy, startDate, endDate } = req.body;

  try {
    const higherEducation = await HigherEducation.findById(id);

    if (!higherEducation) {
      throw new ApiError(404, "Higher Education not found");
    }

    higherEducation.institution = institution;
    higherEducation.degree = degree;
    higherEducation.fieldOfStudy = fieldOfStudy;
    higherEducation.startDate = startDate;
    higherEducation.endDate = endDate;

    const docsURL = higherEducation.docs;
    if (docsURL && Array.isArray(docsURL) && docsURL.length > 0) {
      for (const url of docsURL) {
        try {
          const publicId = url.split("/").pop().split(".")[0];
          await deleteFromCloudinary(publicId);
        } catch (error) {
          console.error("Error deleting file from Cloudinary:", error);
        }
      }
    }

    const newHigherEducationDocs = [];
    if (req.files && req.files.length) {
      for (const file of req.files) {
        try {
          const cloudinaryResponse = await uploadOnCloudinary(file.path);
          console.log("Uploaded file to Cloudinary:", cloudinaryResponse);
          newHigherEducationDocs.push(cloudinaryResponse.secure_url);
        } catch (error) {
          console.error("Error uploading file to Cloudinary:", error);
          throw new Error("Failed to upload file to Cloudinary");
        }
      }
    }

    // Set exam.docs to the new documents array
    higherEducation.docs = newHigherEducationDocs;

    // Save the updated exam object
    await higherEducation.save();

    res.status(200).json({
      success: true,
      data: higherEducation,
    });
  } catch (error) {
    console.error("Error updating Higher Education:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export { 
  createHigherEducation, 
  getHigherEducations, 
  getAllHigherEducations,
  getHigherEducationById,
  updateHigherEducation,
  deleteHigherEducation 
};
