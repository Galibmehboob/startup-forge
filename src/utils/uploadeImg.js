import toast from "react-hot-toast";

export const handleImageUpload = async (
    e,
    setUploading,
    setPreview,
    setValue
) => {
    const image = e.target.files?.[0];

    if (!image) return;

    try {
        setUploading(true);

        const formData = new FormData();
        formData.append("image", image);

        const res = await fetch(
            `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
            {
                method: "POST",
                body: formData,
            }
        );

        const result = await res.json();

        if (!result.success) {
            toast.error("Image upload failed");
            return;
        }

        const imageUrl = result.data.display_url;

        setPreview(imageUrl);

        setValue("image", imageUrl, {
            shouldValidate: true,
            shouldDirty: true,
        });

        toast.success("Image uploaded");

        return imageUrl;
    } catch (err) {
        console.log(err);
        toast.error("Upload failed");
    } finally {
        setUploading(false);
    }
};