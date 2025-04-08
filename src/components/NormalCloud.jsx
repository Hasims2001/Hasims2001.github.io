import {Image} from '@chakra-ui/react'

export const NormalCloud = ({id, img, skill}) => {
  return (
    <div key={id} className="normal_cloud">
                <div className="sliding_cloud" style={{textAlign: "center"}}>
                  <p className="skills-card-name" style={{width: '95%', fontSize: "3rem", zIndex: 1, position: "absolute", margin: "auto"}}>{skill}</p>
                  <Image
                    position={"absolute"}
                    zIndex={1}
                    top={16}
                    w={"40%"}
                    className="skills-card-img"
                    filter={"drop-shadow(-5px 5px 0px #000000)"}
                    left={24}
                    src={img}
                  ></Image>
                </div>
              </div>
  )
}
