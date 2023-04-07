export const boxContainer = {
    role:'group',
    p:6,
    maxW:'330px',
    w:'full',
    bg:"white",
    boxShadow:'2xl',
    rounded:'lg',
    pos:'relative',
    zIndex:1,
    _hover:{
      transform: 'translateY(10px)',
      boxShadow: 'lg',
    },
}

export const boxInside = (imgUrl: string) => {
    return {
    rounded:'lg',
    mt:-12,
    pos:'relative',
    height:'230px',
    _after:{
      transition: 'all .3s ease',
      content: '""',
      w: 'full',
      h: 'full',
      pos: 'absolute',
      top: 5,
      left: 0,
      filter: 'blur(15px)',
      backgroundImage:`url(${imgUrl})`,
      zIndex: -1,
    },
    _groupHover:{
      _after: {
        filter: 'blur(20px)',
      },
    }}
}