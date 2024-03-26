import axios from "axios";

const getAllFeature = async () => {
    const rs = await axios.get("http://localhost:6969/api/features");

    return rs;
}
const getAllSponsor = async () => {
    const rs = await axios.get("http://localhost:6969/api/sponsors");
    return rs.data;
}
const getAllContract = async (userId) => {
    const rs = await axios.get(`http://localhost:6969/api/user-contract?userId=${userId}`);
    return rs.data;
}

export {
    getAllFeature,
    getAllSponsor,
    getAllContract,
}