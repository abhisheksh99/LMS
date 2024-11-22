import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import ReactPlayer from 'react-player';
import BuyCourseButton from '@/components/BuyCourseButton';
import { BadgeInfoIcon, Lock, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const {courseId} = useParams();

  const purchasedCourse = false;
  return (
    <div className="space-y-5">
      {/* Course Header Section */}
      <div className="bg-[#2D2F31] text-white">
        <div className="max-w-7xl mx-auto py-8 px-4 md:px-8 flex flex-col gap-2">
          <h1 className="font-bold text-2xl md:text-3xl">Course Title</h1>
          <p className="text-base md:text-lg">Course Sub-title</p>
          <p>
            Created By{" "}
            <span className="text-[#C0C4FC] underline italic">
              Creator Name
            </span>
          </p>
          <div className="flex items-center gap-2 text-sm">
            <BadgeInfoIcon size={20} />
            <p>Last updated Date</p>
          </div>
          <p>Students enrolled: Enrolled Students Count</p>
        </div>
      </div>

      {/* Course Details Section */}
      <div className="max-w-7xl mx-auto my-5 px-4 md:px-8 flex flex-col lg:flex-row justify-between gap-10">
        {/* Course Description and Content */}
        <div className="w-full lg:w-1/2 space-y-5">
          <h1 className="font-bold text-xl md:text-2xl">Description</h1>
          <p className="text-sm">Course Description</p>
          <Card>
            <CardHeader>
              <CardTitle>Course Content</CardTitle>
              <CardDescription>4 lectures</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              Lecture List
              <div className="flex items-center gap-3 text-sm">
                <span>
                  {
                    true ?  <PlayCircle size={14} /> : <Lock size={14} />
                  }
                 
                </span>
                <p>Lecture Title</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Video Player and Purchase Section */}
        <div className="w-full lg:w-1/3">
          <Card>
            <CardContent className="p-4 flex flex-col">
              <div className="w-full aspect-video mb-4">
                <ReactPlayer width="100%" height="100%" url={""} controls={true} />
              </div>
              <h1>Lecture title</h1>
              <Separator className="my-2" />
              <h1 className="text-lg md:text-xl font-semibold">Course Price</h1>
            </CardContent>
            <CardFooter className="flex justify-center p-4">
              {
                purchasedCourse ? <Button className="w-full">Continue Course</Button> : <BuyCourseButton courseId={courseId} />
              }
             
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
