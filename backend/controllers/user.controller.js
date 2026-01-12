import User from '../models/user.model.js'

export const getFeaturedUser = async(req,res) =>{
    try {
        const people = await User.find({ featured: true }).lean();
        return res.status(200).json(people);
    } catch (error) {
        console.log(`Error in getFeaturedUser controller`);
        return res.status(500).json({success: false, message: error.message});
    }
}

export const addNewUser = async (req, res) => {
  const person = req.body;

  if (!person || Object.keys(person).length === 0) {
    return res.status(400).json({
      success: false,
      message: "Body cannot be empty!",
    });
  }

  try {
    const newUser = await User.create(person);

    res.status(201).json({
      success: true,
      data: newUser,
    });
  } catch (error) {
    console.error("Error in addNewUser controller:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const getAllUsers = async (req,res) => {
    try {
        const users = await User.find({});
        res.status(200).json({success: true, users:users})
    } catch (error) {
        console.log(`Error in getAllUsers controller: ${error}`);
        res.status(500).json(`Server error: ${error}`);
    }
}