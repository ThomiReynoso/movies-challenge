export const tvMovieDetailsStyles = {
    gridContainer: {
        margin:"0.5rem 0.5rem 0rem 0.5rem",
        paddingX:"8",
        paddingY:"8",
        height:"50vh",
        gridTemplateColumns:"15% 85%",
        gridTemplateRows:"30% 20% 30% 20%", 
        rowGap:"0",
        columnGap:"4",
        gridTemplateAreas:`
            "image title"
            "image extra_info"
            "image description"
            "image actors"
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