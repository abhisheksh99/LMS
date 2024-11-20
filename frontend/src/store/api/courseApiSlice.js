import { apiSlice } from "./apiSlice";

// Define the course API slice
export const courseApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Endpoint for course creation
    createCourse: builder.mutation({
      query: ({courseTitle,category}) => ({
        url: "/course",
        method: "POST",
        body: {courseTitle,category},
      }),
    }),

  }),
});

// Export the generated hooks
export const { 
  useCreateCourseMutation
} = courseApiSlice;