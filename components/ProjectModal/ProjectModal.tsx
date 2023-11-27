import {FlatList, TouchableOpacity, View} from "react-native";
import ProjectLogo from "../../assets/icons/components/ProjectLogo";
import {Box, Row, Text, useMyTheme} from "../../styled-components/styles";
import {theme} from "../../styled-components/theme";

interface ProjectProps {
    name: string;
    image?: string;
}

interface ProjectArray {
    projects: ProjectProps[];
}

const Project = ({ name }: ProjectProps) => {

    const theme = useMyTheme();

    return (
        <Row alignItems="center" gap="8px" padding="8px">
            <ProjectLogo />
            <Text color={theme.black}>{name}</Text>
        </Row>
    )
}

const ProjectModal = ({projects}: ProjectArray) => {

    return (
        <Box padding="8px 16px" bg={theme.lightgray} rnCSS="position:absolute;top:96px;border-radius:16;align-self:center;">
            <FlatList data={projects}
                      renderItem={
                            ({item}) => <Project name={item.name} />
                      } />
        </Box>
    )
}

export default ProjectModal;