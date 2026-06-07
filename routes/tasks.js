import { Router } from "express";
import { ObjectId } from "mongodb";
import { connectDB } from "../db.js";

const router = Router();

// GET ROUTE - Return all of the tasks, newest first
router.get("/", async (req, res) => {

    try{
        const db = await connectDB();
        const tasks = await db.collection("tasks")
            .find()
            .sort( { createdAt: -1 } )
            .toArray();

        res.json(tasks);
    }
    catch(err){
        res.status(500).json({ error:err.message });
    }
})

// GET TASKS - return a single task by id
router.get("/:id", async (req, res) => {
    try {
        const db = await connectDB();
        const task = await db.collection("tasks")
            .findOne({ _id: new ObjectId(req.params.id) })

        if (!task) return res.status(404).json({ error: "No task found." });

        res.json(task);
    }
    catch(err){
        res.status(500).json({ error:err.message });
    }
})

// POST /tasks - create a new task
router.post("/", async (req, res) => {
    try{
        const db = await connectDB();
        console.log(req.body)
        const { title, priority="medium" } = req.body;

        if(!title || !priority){
            return res.status(400).json({ error: "Missing required field" });
        }

        const result = await db.collection("tasks").insertOne(
            {
                title,
                priority,
                completed: false,
                createdAt: new Date(),
            }
        )

        res.status(201).json({insertedId: result.insertedId});

    }
    catch(err){
        res.status(500).json({ error:err.message });
    }
})

// PATCH METHOD - update fields on an existing task
router.patch('/:id', async (req, res) => {
    try{
        const db = await connectDB();
        const result = await db.collection("tasks").updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: req.body }
        );

        if(result.matchedCount === 0) {
            res.status(404).json({ error: "ID not found" });
        }

        res.json({ modifiedCount: result.modifiedCount } );
    }
    catch(err){
        res.status(500).json({ error:err.message });
    }
})

// DELETE - delete a task
router.delete("/:id", async (req, res) => {
    try{
        const db = await connectDB();
        const result = await db.collection("tasks").deleteOne(
            { _id: new ObjectId(req.params.id) }
        );

        if(result.deletedCount === 0) {
            res.status(404).json({ error: "ID not found" });
        }

        res.json({ deletedCount: result.deletedCount } );

    }
    catch(err){
        res.status(500).json({ error:err.message });
    }
})

export default router;