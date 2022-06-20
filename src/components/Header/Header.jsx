import {
    Container,
    AppBar,
    IconButton,
    Toolbar,
    Box,
    Typography,
} from "@mui/material";
import {useState} from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import DocName from "./DocName";


const styles = {
    box: {flexGrow: 1},
    navBar: {backgroundColor: "primary.gray", flexDirection: "row"},
    menuBtn: {
        padding: "20px",
        backgroundColor: "primary.lightGray",
        borderRadius: 0,
        color: "primary.white",
        fontSize: "2rem",
    },
    title: {
        letterSpacing: "5px",
        textTransform: "uppercase",
        fontWeight: 500,
        p: "8px 20px",
        borderRight: "1px solid #ffffff40",
        display: {
            xs: "none",
            md: "block",
        },
    },
};

function Header() {
    const [menuActive, setMenuActive] = useState(false);


    return (
        <Box sx={styles.box}>
            <AppBar position="static" sx={styles.navBar}>

                <Toolbar>
                    <IconButton sx={styles.menuBtn}>
                        <MenuOutlinedIcon fontSize="inherit"/>
                    </IconButton>
                    <Typography
                        variant="body1"
                        sx={styles.title}
                        display={styles.hideOnMobile}
                    >
                        Markdown
                    </Typography>


                </Toolbar>

                <DocName/>
            </AppBar>
        </Box>
    );
}

export default Header;
