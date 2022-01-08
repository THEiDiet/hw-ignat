import React, {useState} from 'react'
import Affairs from './Affairs'
import c from './../../p1-main/m1-ui/u1-app/App.module.scss'

// types
export type AffairPriorityType = 'low' | 'middle' | 'high'
export type FilterType = 'all' | AffairPriorityType
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}

// constants
const defaultAffairs: AffairType[] = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
    if (filter === 'all') {
        return affairs
    } else return affairs.filter(i => i.priority === filter)

}
export const deleteAffair = (affairs: AffairType[], _id:number):AffairType[] => {
    return affairs.filter(i => i._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

    return (
        <div className={c.marginTop}>
            <span className={c.hw__title}>homeworks 2</span>
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
                filter={filter}
            />
        </div>
    )
}

export default HW2
