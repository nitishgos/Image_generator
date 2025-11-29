import * as dotenv from "dotenv";
import { HfInference } from "@huggingface/inference";
import { createError } from "../error.js";

dotenv.config();

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

// Controller to generate image using Hugging Face SDK
export const generateImage = async (req, res, next) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return next(createError(400, "Prompt is required"));
    }

    // Choose a model (SDXL recommended)
    const model = "black-forest-labs/FLUX.1-dev";

    // Generate image
    const imageResponse = await hf.textToImage({
      model: model,
      inputs: prompt,
      parameters: {
        width: 1024,
        height: 1024,
      },
    });

    // Convert Blob → Buffer → Base64
    const arrayBuffer = await imageResponse.arrayBuffer();
    const base64Image = Buffer.from(arrayBuffer).toString("base64");

    return res.status(200).json({
      photo: base64Image,
    });

  } catch (error) {
    console.error("HuggingFace Error:", error);

    next(
      createError(
        error.status || 500,
        error.message || "Hugging Face API Error"
      )
    );
  }
};
