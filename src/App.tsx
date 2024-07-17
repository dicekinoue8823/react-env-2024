import Button from "@/components/Button.tsx";

const App = () => {
    return (
        <div>
            <div className="max-w-4xl flex justify-center gap-4 mx-auto">
                <Button onClick={() => alert("Create")}>Button-1 </Button>
                <Button className="bg-green-500 hover:bg-green-700">Button-2 </Button>
                <Button variant="secondary">Edit</Button>
                <Button variant="danger" size="sm" pending={true}>Delete</Button>

            </div>
        </div>
    );
}

export default App;