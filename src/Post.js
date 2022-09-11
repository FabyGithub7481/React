import { VscGlobe } from "react-icons/vsc";
import Button from "@material-ui/core/Button";

// es lo mismo que una function
export const Post = () => {
  return (
    <>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
    </>
  );
};
