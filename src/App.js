import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Container, Paper, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		margin: theme.spacing(2),
		padding: theme.spacing(2, 1),
		textAlign: "center",
		position: "absolute",
		bottom: 0,
		right: 0,
		width: 100,
		backgroundColor: "#32a852",
		color: "#fff",
	},
}))

export default function App() {
	const classes = useStyles()
	const dates = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	]
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	]
	const [time, setTime] = useState(new Date())

	const convertToDate = (time) => {
		return time.getDate()
	}
	const convertToDay = (time) => {
		return dates[time.getDay()]
	}
	const convertToMonth = (time) => {
		return months[time.getMonth()]
	}

	const convertToYear = (time) => {
		return time.getFullYear()
	}

	return (
		<div className={classes.root}>
			<Paper elevation={3} className={classes.paper}>
				<Typography variant='h6'>{convertToDay(time)}</Typography>
				<Typography variant='h3'>{convertToDate(time)}</Typography>
				<Typography variant='h4'>{convertToMonth(time)}</Typography>
				<Typography variant='h6'>{convertToYear(time)}</Typography>
			</Paper>
		</div>
	)
}
