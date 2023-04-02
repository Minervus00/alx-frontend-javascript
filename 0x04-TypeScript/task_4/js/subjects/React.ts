/// <reference path="Teacher.ts"/>

namespace Subjects {
	export interface Teacher {
		experienceTeachingReact?: number;
	}

	export class React extends Subject {
		getRequirements() {
			return 'Here is the list of requirements for React';
		}

		getAvailableTeacher() {
			const exp: number | undefined = this.teacher.experienceTeachingReact;
			if ( exp <= 0 || exp === undefined) {
				return 'No available teacher';
			}
			return `Available Teacher: ${this.teacher.firstName}`;
		}
	}
}

