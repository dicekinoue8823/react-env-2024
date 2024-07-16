import Button from "@/components/Button.tsx";

const App = () => {
    return (
        <div>
            <div className="max-w-4xl py-20 flex gap-4 mx-auto">
                <Button onClick={() => alert("Create")}>Button-1 </Button>
                <Button>Button-2 </Button>

            </div>
        </div>
    );
}

export default App;