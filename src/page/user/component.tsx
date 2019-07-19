import {Link} from "react-router5"
import index from "../index"
import {useDispatch, useSelector} from "react-redux"
import {addUser as addUserAction} from "../../entities/reducer"
import {default as React, useCallback, useState} from "react"
import {Button, makeStyles, Table, TableBody, TableCell, TableHead, TableRow, TextField} from "@material-ui/core"
import {AppState} from "../../state"


const useStyles = makeStyles(theme => ({
    userList: {
        maxWidth: "384px",
        margin: theme.spacing(1),
        marginBottom: theme.spacing(3)
    },
    userListTableHead: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: "1rem"
    },
    userListTableRow: {
        "&:nth-of-type(even)": {
            backgroundColor: theme.palette.grey["100"]
        }
    },
    addUser: {
        margin: theme.spacing(1),
        marginBottom: theme.spacing(3)
    },
    addUserButton: {
        margin: theme.spacing(1)
    }
}))

export default function User() {
    return (
        <div>
            <h1>Manage users</h1>
            <UserList/>
            <AddUser/>
            <Link routeName={index.name}>Back</Link>
        </div>
    )
}

const mapUsers = (state: AppState) => state.entity.user

function UserList() {

    const style = useStyles()

    const users = useSelector(mapUsers)

    return (
        <div className={style.userList}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell className={style.userListTableHead}>#</TableCell>
                        <TableCell className={style.userListTableHead}>Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((e, i) => (
                        <TableRow key={e.name} className={style.userListTableRow}>
                            <TableCell component="th">{i + 1}</TableCell>
                            <TableCell>{e.name}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

function AddUser() {

    const style = useStyles()

    const dispatch = useDispatch()
    const [name, setName] = useState("")

    const addUser = useCallback(() => {
        dispatch(addUserAction(name))
    }, [dispatch, name])

    return (
        <div className={style.addUser}>
            <TextField id="user/input-name"
                       label="name"
                       value={name}
                       onChange={e => setName(e.target.value)}/>
            <Button variant="contained"
                    color="primary"
                    onClick={addUser}>
                Add
            </Button>
        </div>
    )
}