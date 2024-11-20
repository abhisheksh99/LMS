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
      invalidatesTags: ['Courses'], // Invalidate Courses tag after creation
    }),

    // Endpoint for retrieving courses created by the user
    getCreatorCourses: builder.query({
      query: () => ({
        url: "/course",  
        method: "GET",
      }),
      providesTags: ['Courses'], // Provide Courses tag for this query
    }),

    // Endpoint for editing an existing course
    editCourse: builder.mutation({
      query: ({ courseId,formData }) => ({
        url: `/course/${courseId}`, 
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ['Courses'], 
    }),
  }),
});


export const { 
  useCreateCourseMutation,
  useGetCreatorCoursesQuery, 
  useEditCourseMutation, 
} = courseApiSlice;