export const tvMovieDetailsStyles = {
    gridContainer: {
        margin:"0.5rem 0.5rem 0rem 0.5rem",
        paddingX:"8",
        paddingY:"8",
        height:"45vh",
        gridTemplateColumns:"15% 85%",
        gridTemplateRows:"30% 30% 40%", 
        rowGap:"0",
        columnGap:"1",
        gridTemplateAreas:`
            "image title"
            "image extra_info"
            "image description"
        `,
    },
    similarStack : {
        overflowX:"scroll",
        whiteSpace:"nowrap",
        maxHeight:"70%",
    },
};

export const tvMovieListStyles = {
    boxContainer: {
        maxWidth:"7xl",
        marginX:"auto",
        paddingX:10,
        paddingY:10,
    }
};