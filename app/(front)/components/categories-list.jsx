"use client";

import { List, ListItem, Card } from "@material-tailwind/react";
import Link from "next/link";

export function CategoriesList({ data }) {
  return (
    <Card className=" flex flex-1">
      <List>
        {data.map((category) => (
          <Link href={`/filter/${category._id}`}>
            <ListItem key={category._id}>
              {category.cat_title}
            </ListItem>
          </Link>
        ))}
      </List>
    </Card>
  );
}

