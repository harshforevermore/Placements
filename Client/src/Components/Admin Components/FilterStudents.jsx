import React from 'react';

const FilterStudents = () => {
  return (
    <section className='filter-students-container w-1/2 p-2 flex flex-col gap-2'>
        <section className="filter-course w-1/2 flex justify-between">
            <label htmlFor="select-course" className="select-course-label text-xl font-medium">Select Course: </label>
            <select name="select-course" id="select-course" className='border-1 w-40'>
                <option value="MCA">MCA</option>
                <option value="BCA">BCA</option>
                <option value="BTech">BTech</option>
                <option value="MTech">MTech</option>
            </select>
        </section>
        <section className="filter-section w-1/2 flex justify-between">
            <label htmlFor="select-section" className="select-course-label text-xl font-medium">Select Section: </label>
            <select name="select-section" id="select-section" className='border-1 w-40'>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
            </select>
        </section>
    </section>
  )
}

export default FilterStudents;