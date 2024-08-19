import { Container } from "./style"
import GitHubImage from '../../assets/github.svg'
import LinkedinImage from '../../assets/linkedin.svg'
import CodeImage from '../../assets/code.svg'

export const SocialLinks = () => {

    const GITHUB_LINK = "https://github.com/LuisFsilva97"
    const LINKEDIN_LINK = "https://www.linkedin.com/in/luis-fernando-silva-betancurt-556b5a276/"

    return (

        <Container>
            <div>
                <a href={GITHUB_LINK} target="_blank" rel='noreferrer'>
                    <img src={GitHubImage} alt="GitHub" />
                </a>

                <a href={LINKEDIN_LINK} target="_blank" rel='noreferrer'>
                    <img src={LinkedinImage} alt="Linkedin" />
                </a>
            </div>

            <div>
                <img src={CodeImage} alt="code" />
                LUIS FERNANDO SILVA BETANCURT
            </div>
        </Container>
    )

}