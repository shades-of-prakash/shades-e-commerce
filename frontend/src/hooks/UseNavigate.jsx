import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);
    const goToPath = (path) => navigate(path);

    return { goBack, goToPath };
};
