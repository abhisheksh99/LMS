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
  }),
});


export const { 
  useCreateCourseMutation,
  useGetCreatorCoursesQuery, 
} = courseApiSlice;