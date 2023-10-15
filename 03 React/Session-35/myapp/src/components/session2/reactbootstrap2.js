import { Button,Badge} from "react-bootstrap";

export function ReactBootstrap2(){
    return(
        <div>
            <h1>React Bootstrap Example</h1>

            <div>
                <Button variant="outline-primary">Primary</Button>
                <Button variant="outline-secondary">Secondary</Button>
                <Button variant="outline-success">Success</Button>
                <Button variant="outline-warning">Warning</Button>
                <Button variant="outline-danger">Danger</Button>
                <Button variant="outline-info">Info</Button>
                <Button variant="outline-light">Light</Button>
                <Button variant="outline-dark">Dark</Button>
                <Button variant="outline-link">Link</Button>
            </div>
            <h2>Badge Example</h2>
            
            <h1>
            <Badge bg="secondary" as={Button}>Comming Soon</Badge>
            </h1>
               
            
        </div>
    )
}

export default ReactBootstrap2;