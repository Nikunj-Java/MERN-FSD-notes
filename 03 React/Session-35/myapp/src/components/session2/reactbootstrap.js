import { Button,Badge} from "react-bootstrap";

export function ReactBootstrap(){
    return(
        <div>
            <h1>React Bootstrap Example</h1>

            <div>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="info">Info</Button>
                <Button variant="light">Light</Button>
                <Button variant="dark">Dark</Button>
                <Button variant="link">Link</Button>
            </div>
            <h2>Badge Example</h2>
            
            <h1>
            <Badge bg="secondary" as={Button}>Comming Soon</Badge>
            </h1>
               
            
        </div>
    )
}

export default ReactBootstrap;