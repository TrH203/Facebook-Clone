import axios from "axios";

const getAllFeature = async () => {
    const rs = await axios.get("http://localhost:6969/api/features");
    return rs;
}

export {
    getAllFeature,
}