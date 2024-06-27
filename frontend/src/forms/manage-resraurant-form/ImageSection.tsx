import { FormControl, FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useFormContext } from "react-hook-form";


export default function ImageSection() {
  const { control } = useFormContext();
  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">
          Image
        </h2>
        <FormDescription>
          Upload your restaurant image.
        </FormDescription>
      </div>
      <div className="flex flex-col gap-8 w-[50%]">
        <FormField 
          control={control}
          name="imageFile"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <input 
                  type="file"  
                  className="bg-white" 
                  accept=".jpg, .jpeg, .png"
                  onChange={(event) => field.onChange(event.target.files ? event.target.files[0] : null)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  )
}
