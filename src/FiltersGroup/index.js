import {useState} from 'react'
import './index.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const FiltersGroup = props => {
  const [checkedLocations, setCheckedLocations] = useState([])

  const handleLocationChange = event => {
    const {value, checked} = event.target
    if (checked) {
      setCheckedLocations([...checkedLocations, value])
    } else {
      setCheckedLocations(
        checkedLocations.filter(location => location !== value),
      )
    }
    // Pass selected locations to parent component
  }

  const renderEmploymentTypesList = () => {
    const {updateEmploymentTypesChecked} = props

    return employmentTypesList.map(eachType => {
      const updateTypeslist = () =>
        updateEmploymentTypesChecked(eachType.employmentTypeId)

      return (
        <li className="fliters-list-item" key={eachType.employmentTypeId}>
          <input
            type="checkbox"
            className="checkbox-input"
            id={eachType.employmentTypeId}
            onChange={updateTypeslist}
          />
          <label htmlFor={eachType.employmentTypeId} className="filter-label">
            {eachType.label}
          </label>
        </li>
      )
    })
  }

  const renderEmploymentTypes = () => (
    <>
      <h1 className="filter-heading">Type of Employment</h1>
      <ul className="filters-list">{renderEmploymentTypesList()}</ul>
    </>
  )

  const renderSalaryRangesList = () => {
    const {updateSalaryRangeId, activeSalaryRangeId} = props

    return salaryRangesList.map(eachRange => {
      const onChangeRange = () => updateSalaryRangeId(eachRange.salaryRangeId)
      const isChecked = eachRange.salaryRangeId === activeSalaryRangeId
      return (
        <li className="fliters-list-item" key={eachRange.salaryRangeId}>
          <input
            type="radio"
            className="checkbox-input"
            id={eachRange.salaryRangeId}
            name="salary ranges"
            onChange={onChangeRange}
            checked={isChecked}
          />
          <label htmlFor={eachRange.salaryRangeId} className="filter-label">
            {eachRange.label}
          </label>
        </li>
      )
    })
  }

  const renderSalaryRangesTypes = () => (
    <>
      <h1 className="filter-heading">Salary Range</h1>
      <ul className="filters-list">{renderSalaryRangesList()}</ul>
    </>
  )

  const renderLocationCheckboxesList = () =>
    ['Hyderabad', 'Bangalore', 'Chennai', 'Delhi', 'Mumbai'].map(location => (
      <li className="fliters-list-item" key={location}>
        <input
          type="checkbox"
          className="checkbox-input"
          id={location}
          value={location}
          onChange={handleLocationChange}
        />
        <label htmlFor={location} className="filter-label">
          {location}
        </label>
      </li>
    ))

  const renderLocationCheckboxes = () => (
    <>
      <h1 className="filter-heading">Locations</h1>
      <ul className="filters-list">{renderLocationCheckboxesList()}</ul>
    </>
  )

  return (
    <div className="filters-group-container">
      {renderEmploymentTypes()}
      <hr className="separator" />
      {renderSalaryRangesTypes()}
      <hr className="separator" />
      {renderLocationCheckboxes()}
    </div>
  )
}

export default FiltersGroup
