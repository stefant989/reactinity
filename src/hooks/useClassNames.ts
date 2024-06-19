import { Condition } from '../types'


export const useClassNames = () => {

	const setClassNames = (conditions: Condition, ...classes: string[]): string => {
		const conditionalClasses = Object.keys(conditions).filter(key => conditions[key]).join(' ')
		const otherClasses = classes.join(' ')
		return [conditionalClasses, otherClasses].filter(Boolean).join(' ')
	}

	return [setClassNames]

}