import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Review } from "@/type/review";
import { StarIcon } from "lucide-react";

export default function ReviewListItem({ review }: { review: Review }) {
  return (
    <>
      <Card>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <Avatar className="size-10">
              <AvatarImage src={review.avatar} />
              <AvatarFallback>PC</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-0.5 leading-none">
              <span className="font-medium">{review.name}</span>
              <span className="text-muted-foreground text-sm">{review.company}</span>
            </div>
          </div>
          <p>{review.body}</p>
          <div className="flex items-center gap-1">
            <StarIcon className="size-4 fill-orange-400 stroke-orange-400" />
            <StarIcon className="size-4 fill-orange-400 stroke-orange-400" />
            <StarIcon className="size-4 fill-orange-400 stroke-orange-400" />
            <StarIcon className="size-4 fill-orange-400 stroke-orange-400" />
            <StarIcon className="size-4 stroke-orange-400" />
          </div>
        </CardContent>
      </Card>
    </>
  );
}
