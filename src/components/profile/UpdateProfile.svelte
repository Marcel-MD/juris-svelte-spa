<script>
  import {
    getProfileById,
    updateProfile,
  } from "../../services/profile.service";
  import { getTypes, getSectors } from "../../services/enum.service";
  import { catchError } from "../../services/error.service";
  import { getCurrentUser } from "../../services/auth.service";
  import { navigate } from "svelte-routing";
  import UpdateEducation from "./UpdateEducation.svelte";
  import UpdateExperience from "./UpdateExperience.svelte";

  export let id;

  let firstName;
  let lastName;
  let profilePicture;
  let type;
  let description;
  let price;
  let phoneNumber;
  let sector;
  let address;
  let educations = [];
  let experiences = [];

  let errorMessage = "";
  let user = getCurrentUser();

  if (!user || (user.id != id && !user.roles.includes("admin"))) {
    navigate("/profile/" + id);
  }

  getProfileById(id).then(
    (response) => {
      errorMessage = "";
      let p = response.data;

      firstName = p.firstName;
      lastName = p.lastName;
      profilePicture = p.profilePicture;
      type = p.type;
      description = p.description;
      price = p.price;
      phoneNumber = p.phoneNumber;
      sector = p.sector;
      address = p.address;
      educations = p.educations;
      experiences = p.experiences;
    },
    (error) => {
      errorMessage = catchError(error);
    }
  );

  function handleUpdate() {
    updateProfile(
      id,
      firstName,
      lastName,
      profilePicture,
      type,
      description,
      price,
      phoneNumber,
      sector,
      address
    ).then(
      (response) => {
        errorMessage = "";
        navigate("/profile/" + id);
      },
      (error) => {
        errorMessage = catchError(error);
      }
    );
  }
</script>

<main>
  <h1>Update Profile {id}</h1>
  <UpdateEducation profileId={id} {educations} />
  <UpdateExperience profileId={id} {experiences} />
</main>

<style>
</style>
