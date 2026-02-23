import { supabase } from "@/lib/supabaseClient";
import { Product, Category } from "@/types";
import { unstable_noStore as noStore } from 'next/cache';

export type SupabaseProduct = {
    id: string;
    slug: string;
    name: string;
    description: string | null;
    price_cents: number;
    compare_at_cents: number | null;
    category: string;
    images: string[];
    tags: string[];
    rating: number;
    review_count: number;
    stock_status: "in_stock" | "low_stock" | "out_of_stock";
    is_new: boolean;
    is_best_seller: boolean;
};

export const mapSupabaseToProduct = (sp: SupabaseProduct): Product => ({
    id: sp.id,
    slug: sp.slug,
    name: sp.name,
    price: sp.price_cents / 100,
    compareAtPrice: sp.compare_at_cents ? sp.compare_at_cents / 100 : undefined,
    category: sp.category as Category,
    description: sp.description || '',
    features: [], // Supabase schema provided doesn't include features
    images: sp.images,
    rating: sp.rating,
    reviewCount: sp.review_count,
    stockStatus: sp.stock_status,
    tags: sp.tags,
    isNew: sp.is_new,
    isBestSeller: sp.is_best_seller,
    variants: [] // Supabase schema provided doesn't include variants
});

export async function fetchProducts(): Promise<Product[]> {
    noStore();
    const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Error fetching products:", error);
        return [];
    }
    return (data as SupabaseProduct[] ?? []).map(mapSupabaseToProduct);
}

export async function fetchNewArrivals(limit: number = 4): Promise<Product[]> {
    noStore();
    const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("is_new", true)
        .order("created_at", { ascending: false })
        .limit(limit);

    if (error) {
        console.error("Error fetching new arrivals:", error);
        return [];
    }
    return (data as SupabaseProduct[] ?? []).map(mapSupabaseToProduct);
}

export async function fetchBestSellers(limit: number = 4): Promise<Product[]> {
    noStore();
    const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("is_best_seller", true)
        .order("rating", { ascending: false })
        .limit(limit);

    if (error) {
        console.error("Error fetching best sellers:", error);
        return [];
    }
    return (data as SupabaseProduct[] ?? []).map(mapSupabaseToProduct);
}

export async function fetchProductBySlug(
    slug: string
): Promise<Product | null> {
    noStore();
    const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();

    if (error) {
        console.error(`Error fetching product with slug ${slug}:`, error);
        return null;
    }
    return data ? mapSupabaseToProduct(data as SupabaseProduct) : null;
}
