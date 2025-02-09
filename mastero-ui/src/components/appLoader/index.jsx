import { Backdrop, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { isLoading } from "../../redux/reducers/loader/loadSlice";
const AppLoader = (props) => {
    const open = useSelector(isLoading);
    return(
        <>
         <Backdrop
            open={open}
         >
            
             <CircularProgress color="inherit" />

        </Backdrop>
        {props.children}
        </>
    )

}

export default AppLoader;