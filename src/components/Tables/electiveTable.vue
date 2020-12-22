<template>
  <div class="elective-table">
    <div class="heading">
      <h1>Electives Mapping</h1>
      <h4>
        Map the electives of the respective semester to the respective
        professors
      </h4>
    </div>
    <table v-if="$store.state.cycle == 'Odd'">
      <tr>
        <th>Semester</th>
        <th>Course</th>
        <th>Course Code</th>
        <th>Credits</th>
        <th>Professor</th>
      </tr>
      <tr
        v-for="(courses, index) in $store.state.oddCycleElectives.sem5.subjects"
        :key="index"
      >
        <td>
          {{ courses.detail.Semester }}
        </td>
        <td>
          {{ courses.detail.Name }}
        </td>
        <td>
          {{ courses.detail.Code }}
        </td>
        <td>
          {{ courses.detail.Credits.Theory }}:{{
            courses.detail.Credits.Tutorial
          }}:{{ courses.detail.Credits.Lab }}
        </td>
        <td class="data-input">
          <div class="custom-input">
            <input
              type="text"
              placeholder="Select Professor"
              list="allProfessors"
              v-model="courses.detail.Professors[0]"
            />
            <datalist id="allProfessors"></datalist>
            <img
              src="../../assets/Common/add.svg"
              alt="add professor"
              title="Add a professor"
              @click="addProfessor('sem5', index)"
            />
          </div>
          <div
            class="custom-input"
            v-if="$store.state.oddCycleElectives.sem5.getProfessors(index) >= 2"
          >
            <input
              type="text"
              placeholder="Select Professor"
              list="allProfessors"
              v-model="courses.detail.Professors[1]"
            />
            <datalist id="allProfessors"></datalist>
            <img
              src="../../assets/Common/delete.svg"
              alt="delete professor"
              title="Remove Professor"
              v-if="
                $store.state.oddCycleElectives.sem5.getProfessors(index) == 2
              "
              @click="removeProfessor('sem5', index)"
            />
            <div v-else class="block"></div>
          </div>
          <div
            class="custom-input"
            v-if="$store.state.oddCycleElectives.sem5.getProfessors(index) >= 3"
          >
            <input
              type="text"
              placeholder="Select Professor"
              list="allProfessors"
              v-model="courses.detail.Professors[2]"
            />
            <datalist id="allProfessors"></datalist>
            <img
              src="../../assets/Common/delete.svg"
              alt="delete professor"
              title="Remove Professor"
              v-if="
                $store.state.oddCycleElectives.sem5.getProfessors(index) == 3
              "
              @click="removeProfessor('sem5', index)"
            />
          </div>
          <div
            class="custom-input"
            v-if="$store.state.oddCycleElectives.sem5.getProfessors(index) >= 4"
          >
            <input
              type="text"
              placeholder="Select 4"
              list="allProfessors"
              v-model="courses.detail.Professors[3]"
            />
            <datalist id="allProfessors"></datalist>
            <img
              src="../../assets/Common/delete.svg"
              alt="delete professor"
              title="Remove Professor"
              v-if="
                $store.state.oddCycleElectives.sem5.getProfessors(index) == 4
              "
              @click="removeProfessor('sem5', index)"
            />
            <div v-else class="block"></div>
          </div>
        </td>
      </tr>
      <tr
        v-for="(courses, index) in $store.state.oddCycleElectives.sem7.subjects"
        :key="courses.id + index * 2 + 100"
      >
        <td>
          {{ courses.detail.Semester }}
        </td>
        <td>
          {{ courses.detail.Name }}
        </td>
        <td>
          {{ courses.detail.Code }}
        </td>
        <td>
          {{ courses.detail.Credits.Theory }}:{{
            courses.detail.Credits.Tutorial
          }}:{{ courses.detail.Credits.Lab }}
        </td>
        <td class="data-input">
          <div class="custom-input">
            <input
              type="text"
              placeholder="Select Professor"
              list="allProfessors"
              v-model="courses.detail.Professors[0]"
            />
            <datalist id="allProfessors"></datalist>
            <img
              src="../../assets/Common/add.svg"
              alt="add professor"
              title="Add a professor"
              @click="addProfessor('sem7', index)"
            />
          </div>
          <div
            class="custom-input"
            v-if="$store.state.oddCycleElectives.sem7.getProfessors(index) >= 2"
          >
            <input
              type="text"
              placeholder="Select Professor"
              list="allProfessors"
              v-model="courses.detail.Professors[1]"
            />
            <datalist id="allProfessors"></datalist>
            <img
              src="../../assets/Common/delete.svg"
              alt="delete professor"
              title="Remove Professor"
              v-if="
                $store.state.oddCycleElectives.sem7.getProfessors(index) == 2
              "
              @click="removeProfessor('sem7', index)"
            />
            <div v-else class="block"></div>
          </div>
          <div
            class="custom-input"
            v-if="$store.state.oddCycleElectives.sem7.getProfessors(index) >= 3"
          >
            <input
              type="text"
              placeholder="Select Professor"
              list="allProfessors"
              v-model="courses.detail.Professors[2]"
            />
            <datalist id="allProfessors"></datalist>
            <img
              src="../../assets/Common/delete.svg"
              alt="delete professor"
              title="Remove Professor"
              v-if="
                $store.state.oddCycleElectives.sem7.getProfessors(index) == 3
              "
              @click="removeProfessor('sem7', index)"
            />
          </div>
          <div
            class="custom-input"
            v-if="$store.state.oddCycleElectives.sem7.getProfessors(index) >= 4"
          >
            <input
              type="text"
              placeholder="Select 4"
              list="allProfessors"
              v-model="courses.detail.Professors[3]"
            />
            <datalist id="allProfessors"></datalist>
            <img
              src="../../assets/Common/delete.svg"
              alt="delete professor"
              title="Remove Professor"
              v-if="
                $store.state.oddCycleElectives.sem7.getProfessors(index) == 4
              "
              @click="removeProfessor('sem7', index)"
            />
            <div v-else class="block"></div>
          </div>
        </td>
      </tr>
    </table>

    <table v-else>
      <tr>
        <th>Semester</th>
        <th>Course</th>
        <th>Course Code</th>
        <th>Credits</th>
        <th>Professor</th>
      </tr>
      <tr
        v-for="(courses, index) in $store.state.evenCycleElectives.sem6
          .subjects"
        :key="index"
      >
        <td>
          {{ courses.detail.Semester }}
        </td>
        <td>
          {{ courses.detail.Name }}
        </td>
        <td>
          {{ courses.detail.Code }}
        </td>
        <td>
          {{ courses.detail.Credits.Theory }}:{{
            courses.detail.Credits.Tutorial
          }}:{{ courses.detail.Credits.Lab }}
        </td>
        <td class="data-input">
          <div class="custom-input">
            <input
              type="text"
              placeholder="Select Professor"
              list="allProfessors"
              v-model="courses.detail.Professors[0]"
            />
            <datalist id="allProfessors"></datalist>
            <img
              src="../../assets/Common/add.svg"
              alt="add professor"
              title="Add a professor"
              @click="addProfessor('sem6', index)"
            />
          </div>
          <div
            class="custom-input"
            v-if="
              $store.state.evenCycleElectives.sem6.getProfessors(index) >= 2
            "
          >
            <input
              type="text"
              placeholder="Select Professor"
              list="allProfessors"
              v-model="courses.detail.Professors[1]"
            />
            <datalist id="allProfessors"></datalist>
            <img
              src="../../assets/Common/delete.svg"
              alt="delete professor"
              title="Remove Professor"
              v-if="
                $store.state.evenCycleElectives.sem6.getProfessors(index) == 2
              "
              @click="removeProfessor('sem6', index)"
            />
            <div v-else class="block"></div>
          </div>
          <div
            class="custom-input"
            v-if="
              $store.state.evenCycleElectives.sem6.getProfessors(index) >= 3
            "
          >
            <input
              type="text"
              placeholder="Select Professor"
              list="allProfessors"
              v-model="courses.detail.Professors[2]"
            />
            <datalist id="allProfessors"></datalist>
            <img
              src="../../assets/Common/delete.svg"
              alt="delete professor"
              title="Remove Professor"
              v-if="
                $store.state.evenCycleElectives.sem6.getProfessors(index) == 3
              "
              @click="removeProfessor('sem6', index)"
            />
          </div>
          <div
            class="custom-input"
            v-if="
              $store.state.evenCycleElectives.sem6.getProfessors(index) >= 4
            "
          >
            <input
              type="text"
              placeholder="Select 4"
              list="allProfessors"
              v-model="courses.detail.Professors[3]"
            />
            <datalist id="allProfessors"></datalist>
            <img
              src="../../assets/Common/delete.svg"
              alt="delete professor"
              title="Remove Professor"
              v-if="
                $store.state.evenCycleElectives.sem6.getProfessors(index) == 4
              "
              @click="removeProfessor('sem6', index)"
            />
            <div v-else class="block"></div>
          </div>
        </td>
      </tr>
    </table>

    <div class="heading">
      <h1>Open Electives</h1>
      <h4>Add custom timings and map professors for open electives</h4>
    </div>

    <table v-if="$store.state.cycle == 'Odd'">
      <tr>
        <th>Course Name</th>
        <th>Course Code</th>
        <th>Time</th>
        <th>Day</th>
        <th>Professor</th>
      </tr>
      <tr
        v-for="(courses, index) in $store.state.oddCycleOpenElectives.sem5
          .subjects"
        :key="index"
      >
        <td class="course-name">
          {{ courses.detail.Name }}
        </td>
        <td>{{ courses.detail.Code }}</td>
        <td class="custom-input">
          <div class="custom-input">
            <input
              type="text"
              placeholder="Select Time"
              list="time1"
              v-model="courses.detail.classTimings.RegularClass1.Time"
            />
            <datalist id="time1">
              <option value="9:00 AM"></option>
              <option value="11:05 AM"></option>
              <option value="1:45 PM"></option>
              <option value="2:40 PM"></option>
            </datalist>
          </div>
          <div class="custom-input">
            <input
              type="text"
              placeholder="Select Time"
              list="time2"
              v-model="courses.detail.classTimings.RegularClass2.Time"
            />
            <datalist id="time2">
              <option value="9:00 AM"></option>
              <option value="11:05 AM"></option>
              <option value="1:45 PM"></option>
              <option value="2:40 PM"></option>
            </datalist>
          </div>
          <div class="custom-input">
            <input
              type="text"
              placeholder="Select Time"
              list="time3"
              v-model="courses.detail.classTimings.RegularClass3.Time"
            />
            <datalist id="time3">
              <option value="9:00 AM"></option>
              <option value="11:05 AM"></option>
              <option value="1:45 PM"></option>
              <option value="2:40 PM"></option>
            </datalist>
          </div>
        </td>

        <td class="custom-input">
          <div class="custom-input">
            <input
              type="text"
              placeholder="Select Day"
              list="day1"
              v-model="courses.detail.classTimings.RegularClass1.Day"
            />
            <datalist id="day1">
              <option value="Monday"></option>
              <option value="Tuesday"></option>
              <option value="Wednesday"></option>
              <option value="Thursday"></option>
              <option value="Friday"></option>
              <option value="Saturday"></option>
            </datalist>
          </div>
          <div class="custom-input">
            <input
              type="text"
              placeholder="Select Day"
              list="day2"
              v-model="courses.detail.classTimings.RegularClass2.Day"
            />
            <datalist id="day2">
              <option value="Monday"></option>
              <option value="Tuesday"></option>
              <option value="Wednesday"></option>
              <option value="Thursday"></option>
              <option value="Friday"></option>
              <option value="Saturday"></option>
            </datalist>
          </div>
          <div class="custom-input">
            <input
              type="text"
              placeholder="Select Day"
              list="day3"
              v-model="courses.detail.classTimings.RegularClass3.Day"
            />
            <datalist id="day3">
              <option value="Monday"></option>
              <option value="Tuesday"></option>
              <option value="Wednesday"></option>
              <option value="Thursday"></option>
              <option value="Friday"></option>
              <option value="Saturday"></option>
            </datalist>
          </div>
        </td>
        <td class="data-input">
          <div class="custom-input">
            <input
              type="text"
              placeholder="Select Main Professor"
              list="allProfessors"
              v-model="courses.detail.Professors[0]"
            />
            <datalist id="allProfessors"></datalist>
            <img
              src="../../assets/Common/add.svg"
              alt="add professor"
              title="Add a professor"
              @click="addOEProfessor('sem5', index)"
            />
          </div>
          <div
            class="custom-input"
            v-if="
              $store.state.oddCycleOpenElectives.sem5.getProfessors(index) >= 2
            "
          >
            <input
              type="text"
              placeholder="Select Professor"
              list="allProfessors"
              v-model="courses.detail.Professors[1]"
            />
            <datalist id="allProfessors"></datalist>
            <img
              src="../../assets/Common/delete.svg"
              alt="delete professor"
              title="Remove Professor"
              v-if="
                $store.state.oddCycleOpenElectives.sem5.getProfessors(index) ==
                2
              "
              @click="removeOEProfessor('sem5', index)"
            />
            <div v-else class="block"></div>
          </div>
          <div
            class="custom-input"
            v-if="
              $store.state.oddCycleOpenElectives.sem5.getProfessors(index) >= 3
            "
          >
            <input
              type="text"
              placeholder="Select Professor"
              list="allProfessors"
              v-model="courses.detail.Professors[2]"
            />
            <datalist id="allProfessors"></datalist>
            <img
              src="../../assets/Common/delete.svg"
              alt="delete professor"
              title="Remove Professor"
              v-if="
                $store.state.oddCycleOpenElectives.sem5.getProfessors(index) ==
                3
              "
              @click="removeOEProfessor('sem5', index)"
            />
            <div v-else class="block"></div>
          </div>
          <div
            class="custom-input"
            v-if="
              $store.state.oddCycleOpenElectives.sem5.getProfessors(index) >= 4
            "
          >
            <input
              type="text"
              placeholder="Select Professor"
              list="allProfessors"
              v-model="courses.detail.Professors[3]"
            />
            <datalist id="allProfessors"></datalist>
            <img
              src="../../assets/Common/delete.svg"
              alt="delete professor"
              title="Remove Professor"
              v-if="
                $store.state.oddCycleOpenElectives.sem5.getProfessors(index) ==
                4
              "
              @click="removeOEProfessor('sem5', index)"
            />
            <div v-else class="block"></div>
          </div>
          <div
            class="custom-input"
            v-if="
              $store.state.oddCycleOpenElectives.sem5.getProfessors(index) >= 5
            "
          >
            <input
              type="text"
              placeholder="Select Professor"
              list="allProfessors"
              v-model="courses.detail.Professors[4]"
            />
            <datalist id="allProfessors"></datalist>
            <img
              src="../../assets/Common/delete.svg"
              alt="delete professor"
              title="Remove Professor"
              v-if="
                $store.state.oddCycleOpenElectives.sem5.getProfessors(index) ==
                5
              "
              @click="removeOEProfessor('sem5', index)"
            />
            <div v-else class="block"></div>
          </div>
          <div
            class="custom-input"
            v-if="
              $store.state.oddCycleOpenElectives.sem5.getProfessors(index) >= 6
            "
          >
            <input
              type="text"
              placeholder="Select Professor"
              list="allProfessors"
              v-model="courses.detail.Professors[5]"
            />
            <datalist id="allProfessors"></datalist>
            <img
              src="../../assets/Common/delete.svg"
              alt="delete professor"
              title="Remove Professor"
              v-if="
                $store.state.oddCycleOpenElectives.sem5.getProfessors(index) ==
                6
              "
              @click="removeOEProfessor('sem5', index)"
            />
            <div v-else class="block"></div>
          </div>
        </td>
      </tr>
      <tr
        v-for="(courses, index) in $store.state.oddCycleOpenElectives.sem7
          .subjects"
        :key="index"
      >
        <td class="course-name">
          {{ courses.detail.Name }}
        </td>
        <td>{{ courses.detail.Code }}</td>
        <td class="custom-input">
          <div class="custom-input">
            <input
              type="text"
              placeholder="Select Time"
              list="time1"
              v-model="courses.detail.classTimings.RegularClass1.Time"
            />
            <datalist id="time1">
              <option value="9:00 AM"></option>
              <option value="11:05 AM"></option>
              <option value="1:45 PM"></option>
              <option value="2:40 PM"></option>
            </datalist>
          </div>
          <div class="custom-input">
            <input
              type="text"
              placeholder="Select Time"
              list="time2"
              v-model="courses.detail.classTimings.RegularClass2.Time"
            />
            <datalist id="time2">
              <option value="9:00 AM"></option>
              <option value="11:05 AM"></option>
              <option value="1:45 PM"></option>
              <option value="2:40 PM"></option>
            </datalist>
          </div>
          <div class="custom-input">
            <input
              type="text"
              placeholder="Select Time"
              list="time3"
              v-model="courses.detail.classTimings.RegularClass3.Time"
            />
            <datalist id="time3">
              <option value="9:00 AM"></option>
              <option value="11:05 AM"></option>
              <option value="1:45 PM"></option>
              <option value="2:40 PM"></option>
            </datalist>
          </div>
        </td>

        <td class="custom-input">
          <div class="custom-input">
            <input
              type="text"
              placeholder="Select Day"
              list="day1"
              v-model="courses.detail.classTimings.RegularClass1.Day"
            />
            <datalist id="day1">
              <option value="Monday"></option>
              <option value="Tuesday"></option>
              <option value="Wednesday"></option>
              <option value="Thursday"></option>
              <option value="Friday"></option>
              <option value="Saturday"></option>
            </datalist>
          </div>
          <div class="custom-input">
            <input
              type="text"
              placeholder="Select Day"
              list="day2"
              v-model="courses.detail.classTimings.RegularClass2.Day"
            />
            <datalist id="day2">
              <option value="Monday"></option>
              <option value="Tuesday"></option>
              <option value="Wednesday"></option>
              <option value="Thursday"></option>
              <option value="Friday"></option>
              <option value="Saturday"></option>
            </datalist>
          </div>
          <div class="custom-input">
            <input
              type="text"
              placeholder="Select Day"
              list="day3"
              v-model="courses.detail.classTimings.RegularClass3.Day"
            />
            <datalist id="day3">
              <option value="Monday"></option>
              <option value="Tuesday"></option>
              <option value="Wednesday"></option>
              <option value="Thursday"></option>
              <option value="Friday"></option>
              <option value="Saturday"></option>
            </datalist>
          </div>
        </td>
        <td class="data-input">
          <div class="custom-input">
            <input
              type="text"
              placeholder="Select Main Professor"
              list="allProfessors"
              v-model="courses.detail.Professors[0]"
            />
            <datalist id="allProfessors"></datalist>
            <img
              src="../../assets/Common/add.svg"
              alt="add professor"
              title="Add a professor"
              @click="addOEProfessor('sem7', index)"
            />
          </div>
          <div
            class="custom-input"
            v-if="
              $store.state.oddCycleOpenElectives.sem5.getProfessors(index) >= 2
            "
          >
            <input
              type="text"
              placeholder="Select Professor"
              list="allProfessors"
              v-model="courses.detail.Professors[1]"
            />
            <datalist id="allProfessors"></datalist>
            <img
              src="../../assets/Common/delete.svg"
              alt="delete professor"
              title="Remove Professor"
              v-if="
                $store.state.oddCycleOpenElectives.sem5.getProfessors(index) ==
                2
              "
              @click="removeOEProfessor('sem7', index)"
            />
            <div v-else class="block"></div>
          </div>
          <div
            class="custom-input"
            v-if="
              $store.state.oddCycleOpenElectives.sem5.getProfessors(index) >= 3
            "
          >
            <input
              type="text"
              placeholder="Select Professor"
              list="allProfessors"
              v-model="courses.detail.Professors[2]"
            />
            <datalist id="allProfessors"></datalist>
            <img
              src="../../assets/Common/delete.svg"
              alt="delete professor"
              title="Remove Professor"
              v-if="
                $store.state.oddCycleOpenElectives.sem5.getProfessors(index) ==
                3
              "
              @click="removeOEProfessor('sem7', index)"
            />
            <div v-else class="block"></div>
          </div>
          <div
            class="custom-input"
            v-if="
              $store.state.oddCycleOpenElectives.sem5.getProfessors(index) >= 4
            "
          >
            <input
              type="text"
              placeholder="Select Professor"
              list="allProfessors"
              v-model="courses.detail.Professors[3]"
            />
            <datalist id="allProfessors"></datalist>
            <img
              src="../../assets/Common/delete.svg"
              alt="delete professor"
              title="Remove Professor"
              v-if="
                $store.state.oddCycleOpenElectives.sem5.getProfessors(index) ==
                4
              "
              @click="removeOEProfessor('sem7', index)"
            />
            <div v-else class="block"></div>
          </div>
          <div
            class="custom-input"
            v-if="
              $store.state.oddCycleOpenElectives.sem5.getProfessors(index) >= 5
            "
          >
            <input
              type="text"
              placeholder="Select Professor"
              list="allProfessors"
              v-model="courses.detail.Professors[4]"
            />
            <datalist id="allProfessors"></datalist>
            <img
              src="../../assets/Common/delete.svg"
              alt="delete professor"
              title="Remove Professor"
              v-if="
                $store.state.oddCycleOpenElectives.sem5.getProfessors(index) ==
                5
              "
              @click="removeOEProfessor('sem7', index)"
            />
            <div v-else class="block"></div>
          </div>
          <div
            class="custom-input"
            v-if="
              $store.state.oddCycleOpenElectives.sem5.getProfessors(index) >= 6
            "
          >
            <input
              type="text"
              placeholder="Select Professor"
              list="allProfessors"
              v-model="courses.detail.Professors[5]"
            />
            <datalist id="allProfessors"></datalist>
            <img
              src="../../assets/Common/delete.svg"
              alt="delete professor"
              title="Remove Professor"
              v-if="
                $store.state.oddCycleOpenElectives.sem5.getProfessors(index) ==
                6
              "
              @click="removeOEProfessor('sem7', index)"
            />
            <div v-else class="block"></div>
          </div>
        </td>
      </tr>
    </table>

    <table v-else>
      <tr>
        <th>Course Name</th>
        <th>Course Code</th>
        <th>Time</th>
        <th>Day</th>
        <th>Professor</th>
      </tr>
      <tr
        v-for="(courses, index) in $store.state.evenCycleOpenElectives.sem6
          .subjects"
        :key="index"
      >
        <td class="course-name">
          {{ courses.detail.Name }}
        </td>
        <td>{{ courses.detail.Code }}</td>
        <td class="custom-input">
          <div class="custom-input">
            <input
              type="text"
              placeholder="Select Time"
              list="time1"
              v-model="courses.detail.classTimings.RegularClass1.Time"
            />
            <datalist id="time1">
              <option value="9:00 AM"></option>
              <option value="11:05 AM"></option>
              <option value="1:45 PM"></option>
              <option value="2:40 PM"></option>
            </datalist>
          </div>
          <div class="custom-input">
            <input
              type="text"
              placeholder="Select Time"
              list="time2"
              v-model="courses.detail.classTimings.RegularClass2.Time"
            />
            <datalist id="time2">
              <option value="9:00 AM"></option>
              <option value="11:05 AM"></option>
              <option value="1:45 PM"></option>
              <option value="2:40 PM"></option>
            </datalist>
          </div>
          <div class="custom-input">
            <input
              type="text"
              placeholder="Select Time"
              list="time3"
              v-model="courses.detail.classTimings.RegularClass3.Time"
            />
            <datalist id="time3">
              <option value="9:00 AM"></option>
              <option value="11:05 AM"></option>
              <option value="1:45 PM"></option>
              <option value="2:40 PM"></option>
            </datalist>
          </div>
        </td>

        <td class="custom-input">
          <div class="custom-input">
            <input
              type="text"
              placeholder="Select Day"
              list="day1"
              v-model="courses.detail.classTimings.RegularClass1.Day"
            />
            <datalist id="day1">
              <option value="Monday"></option>
              <option value="Tuesday"></option>
              <option value="Wednesday"></option>
              <option value="Thursday"></option>
              <option value="Friday"></option>
              <option value="Saturday"></option>
            </datalist>
          </div>
          <div class="custom-input">
            <input
              type="text"
              placeholder="Select Day"
              list="day2"
              v-model="courses.detail.classTimings.RegularClass2.Day"
            />
            <datalist id="day2">
              <option value="Monday"></option>
              <option value="Tuesday"></option>
              <option value="Wednesday"></option>
              <option value="Thursday"></option>
              <option value="Friday"></option>
              <option value="Saturday"></option>
            </datalist>
          </div>
          <div class="custom-input">
            <input
              type="text"
              placeholder="Select Day"
              list="day3"
              v-model="courses.detail.classTimings.RegularClass3.Day"
            />
            <datalist id="day3">
              <option value="Monday"></option>
              <option value="Tuesday"></option>
              <option value="Wednesday"></option>
              <option value="Thursday"></option>
              <option value="Friday"></option>
              <option value="Saturday"></option>
            </datalist>
          </div>
        </td>
        <td class="data-input">
          <div class="custom-input">
            <input
              type="text"
              placeholder="Select Main Professor"
              list="allProfessors"
              v-model="courses.detail.Professors[0]"
            />
            <datalist id="allProfessors"></datalist>
            <img
              src="../../assets/Common/add.svg"
              alt="add professor"
              title="Add a professor"
              @click="addOEProfessor('sem6', index)"
            />
          </div>
          <div
            class="custom-input"
            v-if="
              $store.state.evenCycleOpenElectives.sem5.getProfessors(index) >= 2
            "
          >
            <input
              type="text"
              placeholder="Select Professor"
              list="allProfessors"
              v-model="courses.detail.Professors[1]"
            />
            <datalist id="allProfessors"></datalist>
            <img
              src="../../assets/Common/delete.svg"
              alt="delete professor"
              title="Remove Professor"
              v-if="
                $store.state.evenCycleOpenElectives.sem5.getProfessors(index) ==
                2
              "
              @click="removeOEProfessor('sem6', index)"
            />
            <div v-else class="block"></div>
          </div>
          <div
            class="custom-input"
            v-if="
              $store.state.evenCycleOpenElectives.sem5.getProfessors(index) >= 3
            "
          >
            <input
              type="text"
              placeholder="Select Professor"
              list="allProfessors"
              v-model="courses.detail.Professors[2]"
            />
            <datalist id="allProfessors"></datalist>
            <img
              src="../../assets/Common/delete.svg"
              alt="delete professor"
              title="Remove Professor"
              v-if="
                $store.state.evenCycleOpenElectives.sem5.getProfessors(index) ==
                3
              "
              @click="removeOEProfessor('sem6', index)"
            />
            <div v-else class="block"></div>
          </div>
          <div
            class="custom-input"
            v-if="
              $store.state.evenCycleOpenElectives.sem5.getProfessors(index) >= 4
            "
          >
            <input
              type="text"
              placeholder="Select Professor"
              list="allProfessors"
              v-model="courses.detail.Professors[3]"
            />
            <datalist id="allProfessors"></datalist>
            <img
              src="../../assets/Common/delete.svg"
              alt="delete professor"
              title="Remove Professor"
              v-if="
                $store.state.evenCycleOpenElectives.sem5.getProfessors(index) ==
                4
              "
              @click="removeOEProfessor('sem6', index)"
            />
            <div v-else class="block"></div>
          </div>
          <div
            class="custom-input"
            v-if="
              $store.state.evenCycleOpenElectives.sem5.getProfessors(index) >= 5
            "
          >
            <input
              type="text"
              placeholder="Select Professor"
              list="allProfessors"
              v-model="courses.detail.Professors[4]"
            />
            <datalist id="allProfessors"></datalist>
            <img
              src="../../assets/Common/delete.svg"
              alt="delete professor"
              title="Remove Professor"
              v-if="
                $store.state.evenCycleOpenElectives.sem5.getProfessors(index) ==
                5
              "
              @click="removeOEProfessor('sem6', index)"
            />
            <div v-else class="block"></div>
          </div>
          <div
            class="custom-input"
            v-if="
              $store.state.evenCycleOpenElectives.sem5.getProfessors(index) >= 6
            "
          >
            <input
              type="text"
              placeholder="Select Professor"
              list="allProfessors"
              v-model="courses.detail.Professors[5]"
            />
            <datalist id="allProfessors"></datalist>
            <img
              src="../../assets/Common/delete.svg"
              alt="delete professor"
              title="Remove Professor"
              v-if="
                $store.state.evenCycleOpenElectives.sem5.getProfessors(index) ==
                6
              "
              @click="removeOEProfessor('sem6', index)"
            />
            <div v-else class="block"></div>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  methods: {
    addProfessor(sem, index) {
      if (sem == "sem6") {
        if (
          this.$store.state.evenCycleElectives[sem].getProfessors(index) < 4
        ) {
          this.$store.state.evenCycleElectives[sem].newProfessor.splice(
            index,
            1,
            this.$store.state.evenCycleElectives[sem].incrementNewProfessors(
              index
            )
          );
        }
      } else {
        if (this.$store.state.oddCycleElectives[sem].getProfessors(index) < 4) {
          this.$store.state.oddCycleElectives[sem].newProfessor.splice(
            index,
            1,
            this.$store.state.oddCycleElectives[sem].incrementNewProfessors(
              index
            )
          );
        }
      }
    },
    addOEProfessor(sem, index) {
      if (sem == "sem6") {
        if (
          this.$store.state.evenCycleOpenElectives[sem].getProfessors(index) < 6
        ) {
          this.$store.state.evenCycleOpenElectives[sem].newProfessor.splice(
            index,
            1,
            this.$store.state.evenCycleOpenElectives[
              sem
            ].incrementNewProfessors(index)
          );
        }
      } else {
        if (
          this.$store.state.oddCycleOpenElectives[sem].getProfessors(index) < 6
        ) {
          this.$store.state.oddCycleOpenElectives[sem].newProfessor.splice(
            index,
            1,
            this.$store.state.oddCycleOpenElectives[sem].incrementNewProfessors(
              index
            )
          );
        }
      }
    },
    removeProfessor(sem, index) {
      if (sem == "sem6") {
        if (
          this.$store.state.evenCycleElectives[sem].getProfessors(index) > 1
        ) {
          this.$store.state.evenCycleElectives[sem].newProfessor.splice(
            index,
            1,
            this.$store.state.evenCycleElectives[sem].decrementNewProfessors(
              index
            )
          );
        }
      } else {
        if (this.$store.state.oddCycleElectives[sem].getProfessors(index) > 1) {
          this.$store.state.oddCycleElectives[sem].newProfessor.splice(
            index,
            1,
            this.$store.state.oddCycleElectives[sem].decrementNewProfessors(
              index
            )
          );
        }
      }
    },
    removeOEProfessor(sem, index) {
      if (sem == "sem6") {
        if (
          this.$store.state.evenCycleOpenElectives[sem].getProfessors(index) > 1
        ) {
          this.$store.state.evenCycleOpenElectives[sem].newProfessor.splice(
            index,
            1,
            this.$store.state.evenCycleOpenElectives[
              sem
            ].decrementNewProfessors(index)
          );
        }
      } else {
        if (
          this.$store.state.oddCycleOpenElectives[sem].getProfessors(index) > 1
        ) {
          this.$store.state.oddCycleOpenElectives[sem].newProfessor.splice(
            index,
            1,
            this.$store.state.oddCycleOpenElectives[sem].decrementNewProfessors(
              index
            )
          );
        }
      }
    },
  },
  mounted() {
    let professorNames = this.$store.getters.getProfessorName;
    let list = document.getElementById("allProfessors");
    professorNames.forEach(function (item) {
      var option = document.createElement("option");
      option.value = item;
      list.appendChild(option);
    });
  },
};
</script>
>

<style lang="scss" scoped>
@import "../../scss/table";
.elective-table {
  .heading {
    padding: 0.7rem 0 1rem 0;
    h1,
    h4 {
      margin: 0.5rem;
      padding: 0;
      font-weight: lighter;
    }
    h1 {
      color: $primary;
    }
    h4 {
      color: black;
    }
  }
  table {
    tr {
      .course-name {
        text-align: left;
        padding-left: 1.7rem;
      }
    }
    @include ipad-portrait {
      tr {
        td,
        th {
          text-align: left;
          padding: 0.5rem;
          font-size: small;
          font-weight: lighter;
        }
        th {
          text-align: center;
          font-size: medium;
          font-weight: lighter;
          padding: 1rem;
        }
        .course-name {
          padding-left: 1rem;
        }
      }
    }
  }
}
</style>
