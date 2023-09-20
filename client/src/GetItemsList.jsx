import axios from "axios";


const GetItemsList=({items})=>{
    return(
    <div className="items">
        {items &&
          items.map((item) => (
            <div className="item" key={item._id}>
              <h3>{item.name}</h3>
              <button onClick={() => downloadFile(item._id)}>
                Download File
              </button>
            </div>
          ))}
      </div>
    )
}

const downloadFile = async (id) => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/v1/items/download/${id}`,
        { responseType: "blob" }
      );
      const blob = new Blob([res.data], { type: res.data.type });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "file.pdf";
      // link.download = res.headers["content-disposition"].split("filename=")[1];
      link.click();
    } catch (error) {
      console.log(error);
    }
  };
export default GetItemsList;