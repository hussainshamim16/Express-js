import mongoose from "mongoose";


const trainingProgramSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    durationInMonths: {
      type: Number,
      default: 10,
    },
    registeredParticipants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Students",
      },
    ],
  },
  {
    timestamps: true, 
  }
);

export default mongoose.model("TrainingProgram", trainingProgramSchema);
