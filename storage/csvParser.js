import csvReader from "./csvReader.js";
export const userParser = async () =>{
    const data = await csvReader("../data/users.csv");
    const seperatedUsreData = data.split("\n");
    // remove header
    seperatedUsreData.shift();
    let finalUserData = [];
    seperatedUsreData.forEach(userLine => {
        const SplitUserData = userLine.split(",");
        SplitUserData[SplitUserData.length - 1] = SplitUserData[SplitUserData.length - 1].split("\r")[0]
        finalUserData.push(SplitUserData);
    });


    return finalUserData;
}