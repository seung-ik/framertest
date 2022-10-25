import { motion } from "framer-motion";

function App() {
	return (
		<motion.div
			layout
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, x: "400px", y: "400px", scale: 3, delay: 3000 }}
			exit={{ opacity: 0 }}
			style={{ border: "2px solid black", width: "200px", height: "30px" }}
		>
			asdfasf
		</motion.div>
	);
}

export default App;
