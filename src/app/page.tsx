'use client'
 
 import Link from "next/link";
 import { Button } from "@/components/ui/button";
@@ -80,12 +78,12 @@
       
       
     </div>
-      {showSampleTable && (
-        <div className="container mx-auto py-10">
+    {showSampleTable && (
+      <div className="container mx-auto py-10">
       
           
           
-              
+            
             
             
               
@@ -118,9 +116,9 @@
               
             ))}
           
-    
+      
     
     
       
@@ -136,7 +134,7 @@
         
         
       
-    
+    )}
   );
 };
 export default Home;
