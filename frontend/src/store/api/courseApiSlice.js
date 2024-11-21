import { apiSlice } from "./apiSlice";

// Define the course API slice
export const courseApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Endpoint for course creation
    createCourse: builder.mutation({
      query: ({ courseTitle, category }) => ({
        url: "/course",
        method: "POST",
        body: { courseTitle, category },
      }),
      invalidatesTags: ['Courses'],
    }),

    // Endpoint for retrieving courses created by the user
    getCreatorCourses: builder.query({
      query: () => ({
        url: "/course",
        method: "GET",
      }),
      providesTags: ['Courses'],
    }),

    // Endpoint for editing an existing course
    editCourse: builder.mutation({
      query: ({ courseId, formData }) => ({
        url: `/course/${courseId}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ['Courses'],
    }),

    // Endpoint for retrieving a specific course by ID
    getCourseById: builder.query({
      query: (courseId) => ({
        url: `/course/${courseId}`,
        method: "GET",
      }),
      providesTags: ['Courses'],
    }),

    // Endpoint for toggling publish status
    togglePublish: builder.mutation({
      query: ({ courseId, query }) => ({
        url: `/course/${courseId}?publish=${query}`,
        method: "PATCH",
      }),
      invalidatesTags: ['Courses'],
    }),
    removeCourse: builder.mutation({
      query: (courseId) => ({
        url: `/course/${courseId}`,
        method: "DELETE",
      }),
      invalidatesTags: ['Courses'], // Invalidate courses cache
    }),

    // Endpoint for creating a lecture within a specific course
    createLecture: builder.mutation({
      query: ({ lectureTitle, courseId }) => ({
        url: `/course/${courseId}/lecture`,
        method: "POST",
        body: { lectureTitle },
      }),
      invalidatesTags: ['Courses'],
    }),

    // Endpoint for retrieving lectures for a specific course
    getCourseLectures: builder.query({
      query: (courseId) => ({
        url: `/course/${courseId}/lecture`,
        method: "GET",
      }),
      providesTags: ['Courses'],
    }),

    // Endpoint for updating a lecture
    updateLecture: builder.mutation({
      query: ({ courseId, lectureId, lectureTitle, videoInfo, isPreviewFree }) => ({
        url: `/course/${courseId}/lecture/${lectureId}`,
        method: "PUT",
        body: { lectureTitle, videoInfo, isPreviewFree },
      }),
      invalidatesTags: ['Courses'],
    }),

    // Endpoint for removing a lecture
    removeLecture: builder.mutation({
      query: (lectureId) => ({
        url: `/course/lecture/${lectureId}`,
        method: "DELETE",
      }),
      invalidatesTags: ['Courses'],
    }),

    // Endpoint for retrieving a specific lecture by ID
    getLectureById: builder.query({
      query: (lectureId) => ({
        url: `/course/lecture/${lectureId}`,
        method: "GET",
      }),
      providesTags: ['Courses'],
    }),
  }),
});

export const {
  useCreateCourseMutation,
  useGetCreatorCoursesQuery,
  useEditCourseMutation,
  useGetCourseByIdQuery,
  useTogglePublishMutation, 
  useCreateLectureMutation,
  useGetCourseLecturesQuery,
  useUpdateLectureMutation,
  useRemoveLectureMutation,
  useRemoveCourseMutation,
  useGetLectureByIdQuery,
} = courseApiSlice;
