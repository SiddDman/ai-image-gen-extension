import "./ImageGenerator.css";
import default_image from "../assets/default_image.svg";
import { useState } from "react";
import { useRef } from "react";

const ImageGenerator = () => {
  const [imageUrl, setImageUrl] = useState("/");
  let inputRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const imageGenerator = async () => {
    if (inputRef.current.value === "") return 0;

    setLoading(true);

    const res = await fetch("https://api.edenai.run/v2/image/generation", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZTQ5NjAxZmMtM2Q1Yi00ZmY0LWJjY2YtMzYwMTY1YmUxMWQ2IiwidHlwZSI6ImFwaV90b2tlbiJ9.xuAJRzCcLzKabCnrNtfmR0Zz4uTy9lhGBOUW-r_-h6g
`,
      },
      body: JSON.stringify({
        response_as_dict: true,

        attributes_as_list: false,
        show_original_response: false,
        num_images: 1,
        // providers: "deepai,stabilityai,openai,replicate,amazon",
        providers: "openai",
        text: inputRef.current.value,
        resolution: "1024x1024",
      }),
    });

    let data = await res.json();
    console.log(data);
    if (data?.openai?.items?.length > 0) {
      const extractedUrl = data.openai.items[0].image_resource_url;
      setImageUrl(extractedUrl);
      setLoading(false);
    }
  };

  return (
    <div className="ai-image-generator">
      <div className="header">
        AI Image <span>Generator</span>
      </div>
      <div className="img-loading">
        <div className="image">
          <img src={imageUrl === "/" ? default_image : imageUrl} alt=" " />
        </div>
        <div className="loading">
          <div className={loading ? "loading-bar-full" : "loading-bar"}>
            <div className={loading ? "loading-text" : "display-none"}>
              Loading....
            </div>
          </div>
          <div className="search-box">
            <input
              type="text"
              ref={inputRef}
              className="search-input"
              placeholder="Describe What You Want To See!!"
            />
            <div
              className="generate-btn"
              onClick={() => {
                imageGenerator();
              }}
            >
              Generate
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
