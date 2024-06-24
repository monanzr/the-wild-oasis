import supabase, { supabaseUrl } from "./supabase";

export const getCabins = async () => {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
};

export const createEditCabin = async (newCabin, id) => {
  const hasImagePath = newCabin.image.startsWith(supabase);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. Create/edit cabin
  let query = supabase.from("cabins");

  // A) CREATE
  if (!id) query.from("cabins").insert([{ ...newCabin, image: imagePath }]);

  // B) EDIT
  if (id) query.update({ ...newCabin, image: imagePath }).eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be added");
  }

  // 2. Upload image

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  return data;
};

export const deleteCabin = async (id) => {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }
};
