import { Avatar } from "../Avatar";
import { Container } from "./styles";
import { PencilLine } from 'phosphor-react';

export function Sidebar() {
    return (
        <Container>
            <aside className="sidebar">
                <img className="cover" 
                src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </aside>
            <div className="profile">
                <Avatar hasBorder={true} src="https://github.com/diego3g.png"/>
                <strong>Andrew Henrique</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </Container>
    );
}
