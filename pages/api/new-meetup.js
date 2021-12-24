import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = new MongoClient(
      "mongodb+srv://root:root@cluster0.q1yh2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    client.connect(async(err) => {
        const collection = client.db("test").collection("devices");
        // perform actions on the collection object
       const result = await  collection.insertOne(data)
        client.close();
        res.status(201).json({message:'Success'})
      });
  }
}

export default handler;
