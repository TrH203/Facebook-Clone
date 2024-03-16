import axios from "axios";

const getAllFeature = async () => {
    const rs = await axios.get("http://localhost:6969/api/features");

    return rs;
}
const getAllSponsor = async () => {
    const rs = await axios.get("http://localhost:6969/api/sponsors");
    return rs.data;
}

export {
    getAllFeature,
    getAllSponsor,
}