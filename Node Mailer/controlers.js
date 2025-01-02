import Trainer from "./training.model";

const createTrainer = async (req, res) => {
  try {
    const { TrainerName, TrainerDuration } = req.body;

   
    if (!TrainerName) {
      return res.status(400).json({ message: "Trainer name is required!" });
    }

 
    const newTrainer = await Trainer.create({
      name,
      duration
    });

    res.json({
      message: "New Trainer has been added!",
    });
  } catch (error) {
    console.error("creating Trainer Error ", error.message);
    res.json({ message: "Server error" });
  }
};

const fetchTrainers = async (req, res) => {
  try {
    const allTrainers = await Trainer.find({}).populate("enrolledStudents");
    res.json({
      message: "Trainers fetched successfully!",
      Trainers: allTrainers,
    });
  } catch (error) {
    console.error("Error while fetching Trainers:", error.message);
    res.json({ message: "Server error while fetching Trainers." });
  }
};

export { createTrainer, fetchTrainers };
