import "./App.css";
import styles from "./App.module.css";
import { useState } from "react";
import {
	TextField,
	InputAdornment,
	Button,
	IconButton,
	Typography,
} from "@mui/material";

function App() {
	const [showIcon, setShowIcon] = useState(false);
	console.log(process.env);

	return (
		<div className='App'>
			<Button variant='outlined' onClick={() => setShowIcon(!showIcon)}>
				Toggle
			</Button>
			{showIcon ? (
				<i className='fa-solid fa-address-card'></i>
			) : (
				<i className='fa-brands fa-accessible-icon'></i>
			)}

			<TextField
				placeholder='Search chats...'
				label='Search'
				variant='outlined'
				autoFocus
				InputProps={{
					endAdornment: (
						<InputAdornment position='start'>
							<IconButton onClick={() => setShowIcon(!showIcon)}>
								{showIcon ? (
									<i className='fa-solid fa-address-card'></i>
								) : (
									<i className='fa-brands fa-accessible-icon'></i>
								)}
							</IconButton>
						</InputAdornment>
					),
				}}
			/>

			<Typography variant='h4'>
				Name = {process.env.REACT_APP_NAME}
			</Typography>
			<p className={styles.MyClass}>Testing class</p>
			<p className={styles["my-class"]}>Testing class</p>
		</div>
	);
}

export default App;
