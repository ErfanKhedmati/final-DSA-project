import fs from "node:fs/promises";

const csvReader = async (path) => {
    try{
        const data = await fs.readFile(path, "utf-8");
        if(!data) return thorw("data is not founded");
        return data;
    } catch(err) {
        return err;
    }
}
export default csvReader;