/// <reference path="Teacher.ts"/>

namespace Subjects {
	export interface Teacher {
		experienceTeachingJava?: number;
	}

	export class Java extends Subject {
		getRequirements() {
			return 'Here is the list of requirements for Java';
		}

		getAvailableTeacher() {
			const exp: number | undefined = this.teacher.experienceTeachingJava;
			if ( exp <= 0 || exp === undefined) {
				return 'No available teacher';
			}
			return `Available Teacher: ${this.teacher.firstName}`;
		}
	}
}
